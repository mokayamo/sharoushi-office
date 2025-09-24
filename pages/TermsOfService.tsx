import React from 'react';

const LegalPageLayout: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-primary mb-10">{title}</h1>
      <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
        {children}
      </div>
    </div>
  </div>
);

const TermsOfService: React.FC = () => {
  return (
    <LegalPageLayout title="利用規約">
      <section>
        <h2 className="text-xl font-semibold">第1条（適用）</h2>
        <p>本規約は、◯◯社会保険労務士事務所（以下「当事務所」）がこのウェブサイト上で提供するサービス（以下「本サービス」）の利用条件を定めるものです。ユーザーの皆様（以下「ユーザー」）には、本規約に従って、本サービスをご利用いただきます。</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold">第2条（禁止事項）</h2>
        <p>ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
        <ul>
          <li>法令または公序良俗に違反する行為</li>
          <li>犯罪行為に関連する行為</li>
          <li>当事務所のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
          <li>当事務所のサービスの運営を妨害するおそれのある行為</li>
          <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
          <li>他のユーザーに成りすます行為</li>
        </ul>
      </section>
       <section>
        <h2 className="text-xl font-semibold">第3条（免責事項）</h2>
        <p>当事務所は、本サービスに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。本サービスに掲載されている情報は、一般的な情報提供を目的としたものであり、法的アドバイスを提供するものではありません。</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold">第4条（著作権）</h2>
        <p>本サービスに掲載されている文章、写真、イラストなどのコンテンツの著作権は、当事務所または正当な権利者に帰属します。これらのコンテンツは、私的使用など法律によって認められる範囲を超えて、無断で使用（複製、改ざん、頒布などを含む。）することはできません。</p>
      </section>
       <section>
        <h2 className="text-xl font-semibold">第5条（本規約の変更）</h2>
        <p>当事務所は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。</p>
      </section>
    </LegalPageLayout>
  );
};

export default TermsOfService;
