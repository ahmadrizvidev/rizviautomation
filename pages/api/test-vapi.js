export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method Not Allowed" });
  }

  try {
    const { phone, name, demoType, email } = req.body;

    if (!phone || !name || !demoType) {
      return res.status(400).json({ 
        success: false, 
        error: "Phone, Name and demoType are required" 
      });
    }

    // ✅ Base URL
    const baseUrl = "https://numanahmad12.app.n8n.cloud/webhook";

    // ✅ Map demoType to endpoint
    let endpoint = "";
    if (demoType === "law firm") {
      endpoint = "/law_firm";
    } else if (demoType === "dentist") {
      endpoint = "/dentist";
    } else if (demoType === "real estate") {
      endpoint = "/real_estate";
    } else {
      return res.status(400).json({ 
        success: false, 
        error: "Invalid demoType provided" 
      });
    }

    // ✅ Send request only to the chosen webhook
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone, // dynamic phone
        name,  // dynamic name
        email, // still passing email if available
      }),
    });

    const data = await response.json();

    res.status(200).json({ success: true, vapiResponse: data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
