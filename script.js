// ৩০ দিনের রমজানের সময়সূচী
const scheduleData = [
    { day: "১ম রমজান", sehri: "৪:৪৫ AM", iftar: "৬:৩০ PM" },
    { day: "২য় রমজান", sehri: "৪:৪৪ AM", iftar: "৬:৩০ PM" },
    { day: "৩য় রমজান", sehri: "৪:৪৩ AM", iftar: "৬:৩১ PM" },
    { day: "৪র্থ রমজান", sehri: "৪:৪২ AM", iftar: "৬:৩১ PM" },
    { day: "৫ম রমজান", sehri: "৪:৪১ AM", iftar: "৬:৩২ PM" },
    { day: "৬ষ্ঠ রমজান", sehri: "৪:৪০ AM", iftar: "৬:৩২ PM" },
    { day: "৭ম রমজান", sehri: "৪:৩৯ AM", iftar: "৬:৩৩ PM" },
    { day: "৮ম রমজান", sehri: "৪:৩৮ AM", iftar: "৬:৩৩ PM" },
    { day: "৯ম রমজান", sehri: "৪:৩৭ AM", iftar: "৬:৩৪ PM" },
    { day: "১০ম রমজান", sehri: "৪:৩৬ AM", iftar: "৬:৩৪ PM" },
    { day: "১১ম রমজান", sehri: "৪:৩৫ AM", iftar: "৬:৩৫ PM" },
    { day: "১২ম রমজান", sehri: "৪:৩৪ AM", iftar: "৬:৩৫ PM" },
    { day: "১৩ম রমজান", sehri: "৪:৩৩ AM", iftar: "৬:৩৬ PM" },
    { day: "১৪ম রমজান", sehri: "৪:৩২ AM", iftar: "৬:৩৬ PM" },
    { day: "১৫ম রমজান", sehri: "৪:৩১ AM", iftar: "৬:৩৭ PM" },
    { day: "১৬ম রমজান", sehri: "৪:৩০ AM", iftar: "৬:৩৭ PM" },
    { day: "১৭ম রমজান", sehri: "৪:২৯ AM", iftar: "৬:৩৮ PM" },
    { day: "১৮ম রমজান", sehri: "৪:২৮ AM", iftar: "৬:৩৮ PM" },
    { day: "১৯ম রমজান", sehri: "৪:২৭ AM", iftar: "৬:৩৯ PM" },
    { day: "২০ম রমজান", sehri: "৪:২৬ AM", iftar: "৬:৩৯ PM" },
    { day: "২১ম রমজান", sehri: "৪:২৫ AM", iftar: "৬:৪০ PM" },
    { day: "২২ম রমজান", sehri: "৪:২৪ AM", iftar: "৬:৪০ PM" },
    { day: "২৩ম রমজান", sehri: "৪:২৩ AM", iftar: "৬:৪১ PM" },
    { day: "২৪ম রমজান", sehri: "৪:২২ AM", iftar: "৬:৪১ PM" },
    { day: "২৫ম রমজান", sehri: "৪:২১ AM", iftar: "৬:৪২ PM" },
    { day: "২৬ম রমজান", sehri: "৪:২০ AM", iftar: "৬:৪২ PM" },
    { day: "২৭ম রমজান", sehri: "৪:১৯ AM", iftar: "৬:৪৩ PM" },
    { day: "২৮ম রমজান", sehri: "৪:১৮ AM", iftar: "৬:৪৩ PM" },
    { day: "২৯ম রমজান", sehri: "৪:১৭ AM", iftar: "৬:৪৪ PM" },
    { day: "৩০ম রমজান", sehri: "৪:১৬ AM", iftar: "৬:৪৪ PM" },
];

// 📝 সময়সূচী টেবিলে যোগ করা
const tableBody = document.getElementById("tableBody");
scheduleData.forEach(({ day, sehri, iftar }) => {
    tableBody.innerHTML += `<tr><td>${day}</td><td>${sehri}</td><td>${iftar}</td></tr>`;
});

// 🔍 সার্চ ফাংশন
function searchSchedule() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let rows = document.querySelectorAll("#scheduleTable tbody tr");

    rows.forEach(row => {
        row.style.display = row.innerText.toLowerCase().includes(input) ? "" : "none";
    });
}