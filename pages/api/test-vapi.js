export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method Not Allowed" });
  }

  try {
    const { phone, name } = req.body; // ✅ real data from client request

    if (!phone || !name) {
      return res.status(400).json({ success: false, error: "Phone and Name are required" });
    }

    const response = await fetch(
      "https://numanahmad12.app.n8n.cloud/webhook/sdasda", // your real webhook
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone, // dynamic phone
          name,  // dynamic name
        }),
      }
    );

    const data = await response.json();

    res.status(200).json({ success: true, vapiResponse: data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
