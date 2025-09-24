import React from 'react';

// Fix: Replaced JSX.Element with React.ReactNode to resolve "Cannot find namespace 'JSX'" error.
const ServiceCard: React.FC<{ image: string; title: string; description: string }> = ({ image, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
    <div className="w-full h-32 rounded-lg overflow-hidden mb-6">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
        onError={(e) => {
          // 画像が読み込めない場合はプレースホルダーを表示
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const parent = target.parentElement;
          if (parent) {
            parent.innerHTML = '<div class="w-full h-full bg-secondary flex items-center justify-center text-primary text-4xl font-bold">' + title.charAt(0) + '</div>';
          }
        }}
      />
    </div>
    <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      image: '/images/services/payroll-calculation.jpg',
      title: '給与計算',
      description: '社会保険料の控除から税金計算まで、正確で迅速な給与計算を代行。法改正にも対応し、安心してお任せいただけます。',
    },
    {
      image: '/images/services/social-insurance.jpg',
      title: '社会保険・労働保険の手続き',
      description: '煩雑な入退社手続き、年度更新、算定基礎届などを正確かつ迅速に代行。本業に専念できる環境を整えます。',
    },
    {
      image: '/images/services/work-rules.jpg',
      title: '就業規則の作成・見直し',
      description: '最新の法改正に対応し、貴社の実情に合わせた就業規則を作成・改訂。労務リスクを未然に防ぎます。',
    },
    {
      image: '/images/services/subsidies.jpg',
      title: '助成金の申請サポート',
      description: '雇用関連の多種多様な助成金の中から、受給可能性の高いものを提案。申請書類の作成から提出まで一貫して支援します。',
    },
    {
      image: '/images/services/hr-consultation.jpg',
      title: '人事・労務相談',
      description: '採用、解雇、労働時間、ハラスメント対策など、人事労務に関するあらゆるご相談に対応。問題解決の糸口を一緒に探します。',
    },
    {
      image: '/images/services/startup-support.jpg',
      title: '創業支援',
      description: '新規事業立ち上げ時の労務手続きから従業員雇用のアドバイスまで、創業期に必要な労務関連業務を総合的にサポートします。',
    },
  ];

  return (
    <section id="services" className="py-24 bg-secondary min-h-screen flex items-start">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">業務内容</h2>
          <p className="mt-4 text-lg text-slate-600">Our Services</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} image={service.image} title={service.title} description={service.description} />
          ))}
        </div>
        </div>
    </section>
  );
};

export default Services;