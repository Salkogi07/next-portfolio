import Layout from "@/components/layout";

export default function Demo() {
  return (
    <>
      <Layout>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
          <iframe 
            src="https://pr-demo-gamma.vercel.app/"
            style={{
              width: "80%",
              height: "80%",
              border: "none",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
            title="Demo Page"
          ></iframe>
        </div>
      </Layout>
    </>
  );
}
