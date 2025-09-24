import React from 'react';

const Hero: React.FC = () => {
  const handleScrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-secondary pt-24 pb-20 min-h-screen flex items-center">
       <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('https://picsum.photos/1600/900?grayscale&blur=2')" }}
      ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 leading-tight">
          <span className="block">ちょっとした疑問も、</span>
          <span className="block text-primary mt-2">あなたのそばでサポートします。</span>
        </h1>
        <p className="mt-6 max-w-4xl mx-auto text-lg md:text-xl text-slate-600">
          日々の給与計算や労務管理の小さな疑問から、就業規則の作成、助成金申請まで。
          <br />
          企業と従業員の双方にとって最適な環境づくりを、いつでも、どこでもサポートいたします。
        </p>
        <div className="mt-10">
          <button
            onClick={handleScrollToContact}
            className="inline-block bg-primary text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-primary-dark transform hover:-translate-y-1 transition-all duration-300"
          >
            お問い合わせ
          </button>
        </div>
        </div>
    </section>
  );
};

export default Hero;
