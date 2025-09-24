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

const SpecifiedCommercialTransactions: React.FC = () => {
    return (
        <LegalPageLayout title="特定商取引法に基づく表記">
            <div className="overflow-x-auto">
                <table className="min-w-full">
                    <tbody>
                        <tr className="border-b">
                            <th className="py-3 px-4 text-left font-semibold">事務所名</th>
                            <td className="py-3 px-4">◯◯社会保険労務士事務所</td>
                        </tr>
                        <tr className="border-b">
                            <th className="py-3 px-4 text-left font-semibold">代表者名</th>
                            <td className="py-3 px-4">◯◯ ◯◯</td>
                        </tr>
                        <tr className="border-b">
                            <th className="py-3 px-4 text-left font-semibold">所在地</th>
                            <td className="py-3 px-4">〒XXX-XXXX 東京都◯◯区◯◯ X-X-X</td>
                        </tr>
                        <tr className="border-b">
                            <th className="py-3 px-4 text-left font-semibold">連絡先</th>
                            <td className="py-3 px-4">電話: 03-XXXX-XXXX / メール: info@sharoushi-sample.jp</td>
                        </tr>
                        <tr className="border-b">
                            <th className="py-3 px-4 text-left font-semibold">料金表示</th>
                            <td className="py-3 px-4">各サービスページに記載の通り。個別にお見積もりを提示いたします。</td>
                        </tr>
                        <tr className="border-b">
                            <th className="py-3 px-4 text-left font-semibold">支払方法</th>
                            <td className="py-3 px-4">銀行振込</td>
                        </tr>
                        <tr className="border-b">
                            <th className="py-3 px-4 text-left font-semibold">返金ポリシー</th>
                            <td className="py-3 px-4">サービスの性質上、業務着手後の返金には応じかねますので、あらかじめご了承ください。</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </LegalPageLayout>
    );
};

export default SpecifiedCommercialTransactions;
