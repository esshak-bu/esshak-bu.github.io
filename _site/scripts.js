document.addEventListener("DOMContentLoaded", () => {
  // SQL demo
  document.querySelectorAll("[data-sql-demo]").forEach((demo) => {
    const tabs = demo.querySelectorAll("[data-tab]");
    const panels = demo.querySelectorAll("[data-panel]");
    const textarea = demo.querySelector("textarea");
    const inline = demo.querySelector("[data-inline-results]");
    const resultsPanel = demo.querySelector("[data-results-table]");
    const run = demo.querySelector("[data-run-query]");

    const rows = [
      ["Technology","142,500","12,341"],
      ["Finance","128,300","8,912"],
      ["Healthcare","115,200","6,421"],
      ["Consulting","113,800","5,982"],
      ["Education","98,400","4,210"]
    ];

    function renderResults(){
      let limit = 5;
      const m = textarea.value.match(/LIMIT\s+(\d+)/i);
      if (m) limit = Math.min(parseInt(m[1],10), rows.length);
      let subset = rows.slice(0, limit);

      const industryMatch = textarea.value.match(/industry\s*=\s*['"]([^'"]+)['"]/i);
      if (industryMatch){
        subset = rows.filter(r => r[0].toLowerCase() === industryMatch[1].toLowerCase());
      }

      const table = `
        <table>
          <thead><tr><th>industry</th><th>avg_salary</th><th>job_postings</th></tr></thead>
          <tbody>${subset.map(r => `<tr>${r.map(v=>`<td>${v}</td>`).join("")}</tr>`).join("")}</tbody>
        </table>`;
      inline.innerHTML = table;
      resultsPanel.innerHTML = table;
    }

    tabs.forEach(tab => tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.toggle("active", t === tab));
      panels.forEach(p => p.classList.toggle("active", p.dataset.panel === tab.dataset.tab));
    }));
    run?.addEventListener("click", () => { renderResults(); tabs[1].click(); });
    renderResults();
  });

  // Project filters
  const filterWrap = document.querySelector("[data-project-filters]");
  if (filterWrap){
    const buttons = filterWrap.querySelectorAll("button");
    const cards = document.querySelectorAll("[data-tags]");
    buttons.forEach(btn => btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.toggle("active", b === btn));
      const f = btn.dataset.filter;
      cards.forEach(card => card.hidden = !(f === "all" || card.dataset.tags.split(" ").includes(f)));
    }));
  }

  // Copy code buttons
  document.querySelectorAll(".copy-code").forEach(btn => {
    btn.addEventListener("click", async () => {
      const block = btn.closest(".code-card")?.querySelector("pre code");
      if (!block) return;
      await navigator.clipboard.writeText(block.innerText);
      const old = btn.textContent;
      btn.textContent = "Copied!";
      setTimeout(() => btn.textContent = old, 1200);
    });
  });
});
