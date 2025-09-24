import React from 'react';

const Pricing: React.FC = () => {
  const handleScrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  const pricingTiers = [
    {
      name: '顧問契約',
      price: '月額 30,000円〜',
      description: '労務相談、法改正情報提供、軽微な手続き代行などを含みます。',
    },
    {
      name: '就業規則作成',
      price: '150,000円〜',
      description: 'ヒアリングから作成、届出まで一貫してサポートします。',
    },
    {
      name: '助成金申請',
      price: '受給額の15%',
      description: '完全成功報酬型。着手金は不要です。',
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-white min-h-screen flex items-start">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">料金の目安</h2>
          <p className="mt-4 text-lg text-slate-600">Pricing</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier) => (
            <div key={tier.name} className="border border-slate-200 rounded-lg p-8 text-center flex flex-col">
              <h3 className="text-xl font-semibold text-slate-800">{tier.name}</h3>
              <p className="mt-4 text-4xl font-bold text-primary">{tier.price}</p>
              <p className="mt-6 text-slate-600 flex-grow">{tier.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center text-slate-500 bg-slate-100 p-4 rounded-md">
          <p>※ 上記はあくまで目安です。業務内容や企業の規模によって料金は変動いたします。</p>
          <p>まずはお客様の状況を詳しくお伺いし、最適なお見積もりをご提案させていただきますので、お気軽にお問い合わせください。</p>
        </div>
        <div className="mt-8 text-center">
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

export default Pricing;
