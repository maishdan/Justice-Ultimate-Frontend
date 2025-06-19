export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 text-white p-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-4xl font-bold border-b pb-2">Contact Us</h2>
        <p className="text-lg">We’d love to hear from you. Reach out to us through the following channels:</p>

        <div className="space-y-4">
          <p>
            📧 <strong>Email:</strong> support@justiceultimate.com
          </p>
          <p>
            ☎️ <strong>Phone:</strong> +254 790 293 895
          </p>
          <p>
            🏢 <strong>Headquarters:</strong> Nairobi, Kenya
          </p>
          <p>
            🌍 <strong>Global Offices:</strong> USA · UK · Germany · South Africa · UAE
          </p>
        </div>

        <p>Or reach out to us directly on WhatsApp or schedule a call through our online booking system.</p>
      </div>
    </div>
  );
}
