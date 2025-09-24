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

const PrivacyPolicy: React.FC = () => {
  return (
    <LegalPageLayout title="プライバシーポリシー">
      <section>
        <p>◯◯社会保険労務士事務所（以下「当事務所」）は、個人情報保護の重要性を認識し、その適切な管理を行うことが重要な社会的責務であると考えています。当事務所は、個人情報に関する法律を遵守するとともに、以下のプライバシーポリシーに従って、個人情報の保護に努めます。</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold">1. 個人情報の取得について</h2>
        <p>当事務所は、偽りその他不正の手段によらず適正に個人情報を取得致します。お問い合わせフォームから取得する情報は、お名前、メールアドレス、ご相談内容です。</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold">2. 個人情報の利用目的について</h2>
        <p>当事務所は、個人情報を以下の目的のために利用いたします。以下に定めのない目的で個人情報を利用する場合、あらかじめご本人の同意を得た上で行ないます。</p>
        <ul>
          <li>お問い合わせへの返信</li>
          <li>当事務所からのご連絡や業務のご案内</li>
          <li>ご依頼いただいた業務の遂行</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-semibold">3. 個人情報の第三者提供について</h2>
        <p>当事務所は、個人情報保護法等の法令に定めのある場合を除き、個人情報をあらかじめご本人の同意を得ることなく、第三者に提供致しません。</p>
      </section>
       <section>
        <h2 className="text-xl font-semibold">4. 個人情報の安全管理について</h2>
        <p>当事務所は、取り扱う個人情報の漏洩、滅失またはき損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold">5. 個人情報の開示・訂正等について</h2>
        <p>当事務所は、ご本人から自己の個人情報についての開示の請求がある場合、速やかに開示を致します。その際、ご本人であることが確認できない場合には、開示に応じません。個人情報の内容に誤りがあり、ご本人から訂正・追加・削除の請求がある場合、調査の上、速やかにこれらの請求に対応致します。</p>
      </section>
    </LegalPageLayout>
  );
};

export default PrivacyPolicy;
