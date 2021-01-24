const downloadCSV = (csv: string, filename: string) => {
  let downloadLink: any;
  const csvFile = new Blob([csv], { type: 'text/csv' });
  downloadLink = document.createElement('a');
  downloadLink.download = filename;
  downloadLink.href = window.URL.createObjectURL(csvFile);
  downloadLink.style.display = 'none';
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
};

export const exportTableToCSV = (tableId: string, filename: string) => {
  const csv = [];
  const rows = document.querySelectorAll(`#${tableId} tr`);
  for (let i = 0; i < rows.length; i += 1) {
    const row = [];
    const cols = rows[i].querySelectorAll('td, th');
    for (let j = 0; j < cols.length; j += 1)
      row.push((cols[j] as HTMLElement).innerText);

    csv.push(row.join(','));
  }
  downloadCSV(csv.join('\n'), filename);
};
