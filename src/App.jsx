import { useState } from "react";

function App() {
  const [drug, setDrug] = useState("");
  const [report, setReport] = useState(null);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [note, setNote] = useState("");
const [notes, setNotes] = useState([]);

  async function searchDrug() {
    const response = await fetch(
      `https://fastapi-python-boilerplate-theta-wheat.vercel.app/api/drug/${drug}`
    );

    const data = await response.json();
    setReport(data);
  }
  async function askQuestion() {
  const response = await fetch(
    `https://fastapi-python-boilerplate-theta-wheat.vercel.app/api/drug/${drug}/question?q=${question}`
  );

  const data = await response.json();
  setAnswer(data.answer);
}

  return (
  <>
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0a0a0a",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
    padding: "15px",
    borderBottom: "1px solid #00ff88",
  }}
>
  <h2 style={{ color: "#00ff88", margin: 0 }}>
    TOXISCAN AI
  </h2>

  <div>
    <button style={{ marginRight: "10px" }}>
      Analysis
    </button>

    <button>
      Dashboard
    </button>
  </div>
</div>
        <h1
          style={{
            textAlign: "center",
            color: "#00ff88",
            marginBottom: "10px",
          }}
        >
          ToxiScan AI
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#64748b",
            marginBottom: "30px",
          }}
        >
          AI Toxicology Report Generator
        </p>

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "30px",
          }}
        >
          <input
            value={drug}
            onChange={(e) => setDrug(e.target.value)}
            placeholder="Enter a drug name..."
            style={{
              flex: 1,
              padding: "14px",
              fontSize: "16px",
              borderRadius: "10px",
              border: "1px solid #cbd5e1",
            }}
          />

          <button
            onClick={searchDrug}
            style={{
              padding: "14px 24px",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Search
          </button>
        </div>

        {report && (
          <div
            style={{
              backgroundColor: "#111111",
              border: "1px solid #00ff88",
              borderRadius: "16px",
              padding: "25px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <h2
              style={{
                marginTop: 0,
                textTransform: "capitalize",
              }}
            >
              {report.drug}
            </h2>
            <div style={{ marginTop: "20px" }}>
  <h3>AI Toxicity Assessment</h3>

  <div
    style={{
      width: "100%",
      height: "20px",
      backgroundColor: "#222",
      borderRadius: "10px",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        width: `${report.toxicity_score * 10}%`,
        height: "100%",
        backgroundColor:
          report.toxicity_score <= 3
            ? "#00ff88"
            : report.toxicity_score <= 6
            ? "#ffd700"
            : "#ff4444",
      }}
    />
  </div>

  <p>{report.toxicity_score}/10</p>
</div>

            <div
  style={{
    display: "grid",
    gap: "12px",
    marginTop: "20px",
  }}
>
  <details
    style={{
      padding: "15px",
      border: "1px solid #00ff88",
      borderRadius: "10px",
      backgroundColor: "#1a1a1a",
      color: "#ffffff",
    }}
  >
    <summary style={{ cursor: "pointer", color: "#00ff88", fontWeight: "bold" }}>
      Classification
    </summary>
    <p><strong>{report.classification}</strong></p>
    <p>Describes the category of drug and how it works in the body.</p>
  </details>

  <details
    style={{
      padding: "15px",
      border: "1px solid #00ff88",
      borderRadius: "10px",
      backgroundColor: "#1a1a1a",
      color: "#ffffff",
    }}
  >
    <summary style={{ cursor: "pointer", color: "#00ff88", fontWeight: "bold" }}>
      AI Toxicity Assessment
    </summary>
    <p><strong>{report.toxicity_score}/10</strong></p>
    <p>
      An educational score estimating the relative toxicity risk of the drug.
      Higher scores indicate greater potential for harmful effects if misused.
    </p>
  </details>

  <details
    style={{
      padding: "15px",
      border: "1px solid #00ff88",
      borderRadius: "10px",
      backgroundColor: "#1a1a1a",
      color: "#ffffff",
    }}
  >
    <summary style={{ cursor: "pointer", color: "#00ff88", fontWeight: "bold" }}>
      Risk Level
    </summary>
    <p><strong>{report.risk_level}</strong></p>
    <p>
      A simplified assessment of overall safety risk based on toxicity and
      side-effect potential.
    </p>
  </details>

  <details
    style={{
      padding: "15px",
      border: "1px solid #00ff88",
      borderRadius: "10px",
      backgroundColor: "#1a1a1a",
      color: "#ffffff",
    }}
  >
    <summary style={{ cursor: "pointer", color: "#00ff88", fontWeight: "bold" }}>
      Half Life
    </summary>
    <p><strong>{report.half_life}</strong></p>
    <p>
      The approximate time required for the body to eliminate half of the drug
      from the bloodstream.
    </p>
  </details>

  <details
    style={{
      padding: "15px",
      border: "1px solid #00ff88",
      borderRadius: "10px",
      backgroundColor: "#1a1a1a",
      color: "#ffffff",
    }}
  >
    <summary style={{ cursor: "pointer", color: "#00ff88", fontWeight: "bold" }}>
      Liver Toxicity
    </summary>
    <p><strong>{report.liver_toxicity}</strong></p>
    <p>
      Indicates the potential of the drug to cause liver damage when used
      improperly or at excessive doses.
    </p>
  </details>

  <details
    style={{
      padding: "15px",
      border: "1px solid #00ff88",
      borderRadius: "10px",
      backgroundColor: "#1a1a1a",
      color: "#ffffff",
    }}
  >
    <summary style={{ cursor: "pointer", color: "#00ff88", fontWeight: "bold" }}>
      Kidney Toxicity
    </summary>
    <p><strong>{report.kidney_toxicity}</strong></p>
    <p>
      Indicates the potential of the drug to affect kidney function,
      especially during prolonged use or overdose.
    </p>
  </details>

  <details
    style={{
      padding: "15px",
      border: "1px solid #00ff88",
      borderRadius: "10px",
      backgroundColor: "#1a1a1a",
      color: "#ffffff",
    }}
  >
    <summary style={{ cursor: "pointer", color: "#00ff88", fontWeight: "bold" }}>
      Overdose Risk
    </summary>
    <p><strong>{report.overdose_risk}</strong></p>
    <p>
      Represents the likelihood of serious health consequences if the drug is
      taken in amounts exceeding recommended doses.
    </p>
  </details>
</div>
            <div
              style={{
                marginTop: "25px",
                padding: "15px",
                backgroundColor: "#f8fafc",
                borderRadius: "10px",
              }}
            >
              <strong>Educational Disclaimer</strong>
              <p>
                This tool is intended for educational and research purposes only
                and should not be used as medical advice.
              </p>
            </div>
            <div
  style={{
    marginTop: "25px",
    borderTop: "1px solid #e2e8f0",
    paddingTop: "20px",
  }}
>
  <h3>Ask About This Drug</h3>

  <div
    style={{
      display: "flex",
      gap: "10px",
    }}
  >
    <input
      value={question}
      onChange={(e) => setQuestion(e.target.value)}
      placeholder="Can I take this daily?"
      style={{
        flex: 1,
        padding: "12px",
        borderRadius: "10px",
        border: "1px solid #cbd5e1",
      }}
    />

    <button
      onClick={askQuestion}
      style={{
        padding: "12px 20px",
        borderRadius: "10px",
        border: "none",
        cursor: "pointer",
      }}
    >
      Ask
    </button>
  </div>

  {answer && (
    <div
      style={{
        marginTop: "15px",
        padding: "15px",
        backgroundColor: "#f8fafc",
        borderRadius: "10px",
      }}
    >
      <strong>Answer:</strong>
      <p>{answer}</p>
    </div>
  )}
</div>
          </div>
        )}
        <div
  style={{
    maxWidth: "900px",
    margin: "30px auto",
    backgroundColor: "#111111",
    border: "1px solid #00ff88",
    borderRadius: "16px",
    padding: "25px",
    color: "white",
  }}
>
  <h2 style={{ color: "#00ff88" }}>
    Dashboard
  </h2>
  <h3>Prescription Upload</h3>

<input
  type="file"
  style={{
    marginBottom: "20px",
    color: "white",
  }}
/>

  <h3>Prescription Notes</h3>

  <input
    value={note}
    onChange={(e) => setNote(e.target.value)}
    placeholder="Add prescription notes..."
    style={{
      width: "100%",
      padding: "12px",
      marginBottom: "10px",
      backgroundColor: "#1a1a1a",
      color: "white",
      border: "1px solid #00ff88",
      borderRadius: "10px",
    }}
  />

  <button
    onClick={() => {
      if (note.trim() !== "") {
        setNotes([...notes, note]);
        setNote("");
      }
    }}
    style={{
      padding: "12px 20px",
      borderRadius: "10px",
      border: "none",
      cursor: "pointer",
    }}
  >
    Save Note
  </button>

  <div style={{ marginTop: "20px" }}>
    {notes.map((n, i) => (
      <div
        key={i}
        style={{
          padding: "12px",
          marginTop: "10px",
          border: "1px solid #00ff88",
          borderRadius: "10px",
        }}
      >
        {n}
      </div>
    ))}
  </div>
</div>
      </div>
      <div
  style={{
    marginTop: "40px",
    fontSize: "12px",
    color: "#888",
    textAlign: "center",
  }}
>
  Educational use only. Not intended to replace professional
  medical advice, diagnosis, or treatment.
</div>
    </div>
    </>
  );
}

export default App;