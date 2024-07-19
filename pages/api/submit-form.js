export default async function handler(req, res) {
    if (req.method === 'POST') {
      // Process the form data here
      const { email, fullName, message } = req.body;
  
      // Perform your form processing logic here (e.g., save to database, send email, etc.)
  
      return res.status(200).json({ message: 'Form submitted successfully' });
    }
  
    return res.status(405).json({ message: 'Method not allowed' });
  }