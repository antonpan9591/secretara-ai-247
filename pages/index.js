
export default function Home() {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f4f4f4',
      padding: '40px',
      minHeight: '100vh',
      textAlign: 'center'
    }}>
      <h1 style={{ color: '#2f855a', fontSize: '48px' }}>Secretara AI 24/7</h1>
      <p style={{ fontSize: '20px', marginTop: '20px' }}>
        Programări, anulări, informații la un click distanță.
      </p>
      <a href="https://wa.me/40712345678" target="_blank" style={{
        marginTop: '30px',
        display: 'inline-block',
        backgroundColor: '#25D366',
        color: 'white',
        padding: '12px 24px',
        borderRadius: '8px',
        fontSize: '18px',
        textDecoration: 'none'
      }}>
        Scrie-ne pe WhatsApp
      </a>
      <div style={{ marginTop: '50px', fontStyle: 'italic', color: '#555' }}>
        „O experiență impecabilă, am reușit să-mi programez consultația în 30 de secunde!”
        <br />– Maria D., pacient
      </div>
    </div>
  );
}
