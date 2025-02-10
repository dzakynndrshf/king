import React from "react";

const students = [
  { no: 1, nim: "12345678", nama: "Budi Santoso", gender: "Laki-laki", prodi: "Teknik Informatika", kelas: "TI-1A", semester: 3, alamat: "Jl. Merdeka No.10", hobby: "Membaca", citaCita: "Programmer" },
  { no: 2, nim: "87654321", nama: "Siti Aminah", gender: "Perempuan", prodi: "Sistem Informasi", kelas: "SI-1B", semester: 5, alamat: "Jl. Sudirman No.5", hobby: "Menulis", citaCita: "Data Analyst" },
  { no: 3, nim: "11223344", nama: "Agus Wijaya", gender: "Laki-laki", prodi: "Manajemen", kelas: "MN-2A", semester: 4, alamat: "Jl. Pahlawan No.20", hobby: "Bersepeda", citaCita: "Pengusaha" },
  { no: 4, nim: "44332211", nama: "Dewi Lestari", gender: "Perempuan", prodi: "Akuntansi", kelas: "AK-3B", semester: 6, alamat: "Jl. Asia Afrika No.12", hobby: "Memasak", citaCita: "Akuntan" },
  { no: 5, nim: "55667788", nama: "Rian Saputra", gender: "Laki-laki", prodi: "Psikologi", kelas: "PS-1C", semester: 2, alamat: "Jl. Diponegoro No.30", hobby: "Fotografi", citaCita: "Psikolog" },
  { no: 6, nim: "99887766", nama: "Linda Pratiwi", gender: "Perempuan", prodi: "Ilmu Komunikasi", kelas: "IK-4D", semester: 7, alamat: "Jl. Gajah Mada No.15", hobby: "Melukis", citaCita: "Jurnalis" }
];

export default function StudentTableResponsive() {
  return (
    <div className="container mx-auto p-4 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center text-indigo-700">🎓 Daftar Mahasiswa 🎓</h1>

      {/* Card View for Mobile */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {students.map((student) => (
          <div key={student.nim} className="bg-white rounded-xl shadow-md p-4 border border-indigo-300">
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">{student.nama}</h2>
            <p><strong>NIM:</strong> {student.nim}</p>
            <p><strong>Prodi:</strong> {student.prodi}</p>
            <p><strong>Kelas:</strong> {student.kelas}</p>
            <p><strong>Semester:</strong> {student.semester}</p>
            <p><strong>Alamat:</strong> {student.alamat}</p>
            <p><strong>Hobi:</strong> {student.hobby}</p>
            <p><strong>Cita-cita:</strong> {student.citaCita}</p>
          </div>
        ))}
      </div>

      {/* Table View for Desktop */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-xl border border-indigo-300">
          <thead>
            <tr className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm uppercase tracking-widest">
              <th className="px-4 py-2 border">No</th>
              <th className="px-4 py-2 border">NIM</th>
              <th className="px-4 py-2 border">Nama</th>
              <th className="px-4 py-2 border">Gender</th>
              <th className="px-4 py-2 border">Prodi</th>
              <th className="px-4 py-2 border">Kelas</th>
              <th className="px-4 py-2 border">Semester</th>
              <th className="px-4 py-2 border">Alamat</th>
              <th className="px-4 py-2 border">Hobi</th>
              <th className="px-4 py-2 border">Cita-cita</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr
                key={student.nim}
                className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} text-center`}
              >
                <td className="px-4 py-2 border font-bold text-indigo-700">{student.no}</td>
                <td className="px-4 py-2 border">{student.nim}</td>
                <td className="px-4 py-2 border">{student.nama}</td>
                <td className="px-4 py-2 border">{student.gender}</td>
                <td className="px-4 py-2 border">{student.prodi}</td>
                <td className="px-4 py-2 border">{student.kelas}</td>
                <td className="px-4 py-2 border">{student.semester}</td>
                <td className="px-4 py-2 border">{student.alamat}</td>
                <td className="px-4 py-2 border">{student.hobby}</td>
                <td className="px-4 py-2 border">{student.citaCita}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
