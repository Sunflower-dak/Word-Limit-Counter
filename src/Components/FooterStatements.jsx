import { useEffect, useState } from "react";

export default function FooterStatements() {
  const [lastChecked, setLastChecked] = useState(null);

  useEffect(() => {
    const storedDate = localStorage.getItem("lastChecked");

    if (storedDate) {
      setLastChecked(new Date(storedDate));
    } else {
      setLastChecked(null);
    }

    const now = new Date();
    localStorage.setItem("lastChecked", now.toISOString());
  }, []);

  const formatDate = (date) => {
    if (!date) return "No record found.";
    return date.toLocaleString();
  };

  return (
    <div className="footer">
      <small>&copy; Copyright by Kwaku Asetena-Krah. All right Reserved.</small>
      <small>Your Last Word Limit Check: {formatDate(lastChecked)}</small>
    </div>
  );
}

// export default function FooterStatements() {
//   return (
//     <div className="footer">
//       <small>&copy; Copyright by Kwaku Asetena-Krah. All right Reserved.</small>
//       <small>Last Checked Limit: {} </small>
//     </div>
//   );
// }
