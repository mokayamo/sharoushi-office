import React from 'react';

// Fix: Replaced JSX.Element with React.ReactNode to resolve "Cannot find namespace 'JSX'" error.
const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-secondary mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
      title: '社会保険・労働保険の手続き',
      description: '煩雑な入退社手続き、年度更新、算定基礎届などを正確かつ迅速に代行。本業に専念できる環境を整えます。',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
      title: '就業規則の作成・見直し',
      description: '最新の法改正に対応し、貴社の実情に合わせた就業規則を作成・改訂。労務リスクを未然に防ぎます。',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
      title: '助成金の申請サポート',
      description: '雇用関連の多種多様な助成金の中から、受給可能性の高いものを提案。申請書類の作成から提出まで一貫して支援します。',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.084-1.282-.237-1.887M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.084-1.282.237-1.887m10-5a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
      title: '人事・労務相談',
      description: '採用、解雇、労働時間、ハラスメント対策など、人事労務に関するあらゆるご相談に対応。問題解決の糸口を一緒に探します。',
    },
  ];

  return (
    <section id="services" className="py-24 bg-secondary min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">業務内容</h2>
          <p className="mt-4 text-lg text-slate-600">Our Services</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </div>
        </div>
    </section>
  );
};

export default Services;