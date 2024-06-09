import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex-col h-screen bg-white">
        <div className="w-full h-[72px] bg-[#0B58CC] flex">
          <Image src="/BusL.svg" alt="Bus" width={36} height={36} className="my-auto ml-[72px]" />
          <h1 className="text-white text-xl font-bold my-auto ml-5">MyShuttleITB</h1>
        </div>
        <div className="flex relative justify-between mt-[163px] ml-[72px]">
          <div>
            <div className="w-[596px] h-[354px] p-8 bg-blue-50 rounded-3xl flex-col justify-start items-end gap-8 inline-flex">
              <div className="w-[532px] text-black text-5xl font-medium">Katakan ‘selamat tinggal’ untuk rebutan kursi shuttle!</div>
              <div className="w-[528px] text-black text-lg font-normal">Dengan aplikasi kami, pelacakan lokasi shuttle ITB menjadi jauh lebih mudah. Jangan takut rebutan, karena kini kamu bisa booking kursi dalam beberapa klik saja!</div>
            </div>
            <div className="w-[431px] h-[73px] px-12 py-6 bg-blue-600 rounded-lg mt-8">
              <p className="text-center text-white text-2xl font-bold">Download Aplikasi Sekarang</p>
            </div>
          </div>
          <div className="flex gap-8 mr-[77px] mt-[-130px]">
            <Image src="/HP1.svg" alt="HP1" width={302.09} height={612.35} className="relative" />
            <Image src="/HP2.svg" alt="HP2" width={302.09} height={612.35} className="relative mt-[79px]" />
          </div>
        </div>
      </div>
      <div className="bg-[#EEF4FF] w-screen h-full pb-20 px-[72px]">
        <div className="flex-col">
          <h1 className="text-black text-5xl font-medium pt-[72px]">Fitur-fitur utama</h1>
          <div className="justify-between mt-[70px] flex">
            <div className="flex flex-col items-center px-20">
              <div className="w-[413px] h-[110px] bg-blue-600 rounded-xl flex items-center justify-center">
                <h1 className="text-white text-[32px] font-bold">Reservasi</h1>
              </div>
              <Image src="/HP3.svg" alt="HP3" width={302.09} height={612.35} className="mt-[79px]" />
              <p className="text-black text-lg font-normal text-center mt-10 w-[316px]">Sebagai penumpang, lakukan reservasi dengan booking kursi yang masih tersedia dan dapatkan QR code yang dapat discan di shuttle.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-[413px] h-[110px] bg-blue-600 rounded-xl flex items-center justify-center">
                <h1 className="text-white text-[32px] font-bold">Lacak Lokasi</h1>
              </div>
              <Image src="/HP4.svg" alt="HP4" width={302.09} height={612.35} className="mt-[79px]" />
              <p className="text-black text-lg font-normal text-center mt-10 w-[316px]">Sebagai penumpang, lacak shuttle mana saja yang sedang berpergian.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-[413px] h-[110px] bg-blue-600 rounded-xl flex items-center justify-center">
                <h1 className="text-white text-[32px] font-bold">Pantau Pelanggaran</h1>
              </div>
              <Image src="/HP5.svg" alt="HP5" width={302.09} height={612.35} className="mt-[79px]" />
              <p className="text-black text-lg font-normal text-center mt-10 w-[316px]">Sebagai admin, lihat shuttle mana saja yang telah melakukan pelanggaran melampaui batas kecepatan.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
