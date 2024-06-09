import React from 'react';
import cat2 from "../assets/cat2.jpeg";
import cat3 from "../assets/cat3.jpeg";
import cat4 from "../assets/cat4.jpeg";
import vet from "../assets/vet.jpeg";

function Home() {
  return (
    <div className="p-8">
      <div className="hero-section flex items-center justify-between bg-green-100 p-8 rounded-lg shadow-md">
        <div className="hero-section-img" style={{ backgroundImage: `url(${vet})` }}></div>
        <div className="hero-section-div ml-8">
          <h1 className="text-5xl font-bold text-green-800">Patika Veteriner Kliniğimize Hoş Geldiniz</h1>
          <p className="info mt-4 text-xl text-green-600">
            Evcil dostlarınızın sağlığı ve mutluluğu bizim önceliğimizdir. Uzman ekibimiz, en iyi veteriner hizmetlerini sunarak, evcil hayvanlarınızın her zaman güvende ve sağlıklı olmasını sağlar.
          </p>
          <div id="redirectBtn" className="alt-info mt-8">
            <a href="https://github.com/veccina" target="_blank" rel="noopener noreferrer">Daha Fazlası İçin</a>
          </div>
        </div>
      </div>

      <div className="pet-connection mt-12">
        <h1 className="text-4xl font-bold">Evcil Hayvanınızla Daha Güçlü Bir Bağ Kurun</h1>
        <div className="pet-connection-innerDiv mt-8 p-8 rounded-lg shadow-md">
          <p>
            En son evcil hayvan bakım ipuçlarımız ve sağlık makalelerimizle evcil hayvanınızın yaşam kalitesini artırın. Bilgilendirici içeriklerimizle evcil dostlarınızın sağlığını en üst düzeyde tutun.
            <span className="font-bold">
              <a href="https://www.youtube.com/watch?v=Sagg08DrO5U" target="_blank" rel="noopener noreferrer" style={{ color: "#FFA07A", textDecoration: "none" }}>
                Daha Fazla Kod Yazma Bilgisi Keşfedin →
              </a>
            </span>
          </p>
        </div>

        <div className="grid mt-12">
          <div className="grid-card">
            <img src={cat3} alt="Cat 3" />
            <div>
              <h3 className="mt-4">Kod Yazmayı Seven Kediler İçin İpuçları</h3>
              <p>
                Kod yazmayı seven kediniz için en iyi oyun ve egzersiz ipuçları. Kedinizin hem zihinsel hem de fiziksel sağlığını desteklemek için önerilerimize göz atın.
              </p>
              <a href="https://www.everclean.com.tr/cat-care/mutlu-ve-saglikli-bir-kedi-icin-en-iyi-5-ipucumuz/" target="_blank" rel="noopener noreferrer">Keşfet →</a>
            </div>
          </div>
          <div className="grid-card">
            <img src={cat2} alt="Cat 2" />
            <div>
              <h3 className="mt-4">Programlama Yapan Evcil Hayvanlar İçin Rutin Bakım Önerileri</h3>
              <p>
                Kod yazan evcil hayvanınızın günlük bakımını kolaylaştıracak önerilerle onların sağlığını ve mutluluğunu artırın. Egzersiz, hijyen ve mental uyarıcı aktiviteler hakkında ipuçları burada.
              </p>
              <a href="https://www.sencard.com.tr/sen-programi/otesi/en-iyi-arkadasim/evcil-hayvanlarin-bakimi-nasil-yapilmalidir" target="_blank" rel="noopener noreferrer">Keşfet →</a>
            </div>
          </div>
          <div className="grid-card">
            <img src={cat4} alt="Cat 4" />
            <div>
              <h3 className="mt-4">Kod Yazarken Enerji Veren Beslenme Tavsiyeleri</h3>
              <p>
                Kod yazan evcil hayvanınızın enerji seviyesini yüksek tutmak için en uygun besinleri öğrenin. Sağlıklı atıştırmalıklar ve besleyici mamalarla onların verimliliğini artırın.
              </p>
              <a href="https://www.petburada.com/blog/icerik/evcil-hayvanlarin-beslenmesi" target="_blank" rel="noopener noreferrer">Keşfet →</a>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-12">
        <div className="bottom-footer mt-8">
          <div className="left-side">
            <h3>İletişim</h3>
            <a href="https://github.com/veccina">GitHub</a>
            <a href="https://de.linkedin.com/in/bariscanberki/tr">LinkedIn</a>
            <a href="mailto:av.bariscanberki@gmail.com">Email</a>
          </div>
          <div className="right-side">
            <h3>Faydalı Linkler</h3>
            <a href="https://github.com/gorbadil" target="_blank" rel="noopener noreferrer">En Büyük Destek</a>
            <a href="https://www.patika.dev/" target="_blank" rel="noopener noreferrer">En Büyük Hizmet</a>
            <a href="https://www.nefisyemektarifleri.com/patates-puresi-tarifi/" target="_blank" rel="noopener noreferrer">Patates Püresi</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
