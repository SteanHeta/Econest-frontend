import React from 'react';

const LogoPlaceholder = () => (<div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-lg bg-gray-200 sm:h-24 sm:w-24"><svg className="h-10 w-10 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5z"/></svg></div>);
const LocationIcon = () => <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.1.4-.27.61-.47.21-.2.4-.41.56-.63.17-.22.32-.45.46-.69.13-.24.25-.49.35-.75.1-.26.18-.52.25-.79.07-.27.12-.55.16-.83.04-.28.06-.56.07-.85.01-.29.01-.58.01-.87v-1.12a5.25 5.25 0 00-10.5 0v1.12c0 .29 0 .58.01.87.01.29.03.57.07.85.04.28.09.56.16.83.07.27.13.55.25.79.1.26.22.51.35.75.14.24.29.47.46.69.16.22.35.43.56.63.21.2.42.37.61.47.1.07.21.12.28.14l.018.008.006.003zM10 8.25a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd"/></svg>;
const StarIcon = () => <svg className="h-4 w-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10.868 2.884c.321-.662 1.215-.662 1.536 0l1.681 3.46c.154.316.46.533.808.58l3.82.555c.748.108 1.047 1.023.498 1.553l-2.764 2.695c-.25.242-.364.59-.302.928l.652 3.803c.128.745-.654 1.322-1.33.974l-3.41-1.792c-.288-.152-.632-.152-.92 0l-3.41 1.792c-.676.348-1.458-.23-1.33-.974l.652-3.803c.062-.338-.052-.686-.302-.928L2.488 9.032c-.549-.53-.25-1.445.498-1.553l3.82-.555c.348-.047.654-.264.808-.58l1.681-3.46z" clipRule="evenodd"/></svg>;
const ProductIcon = () => <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path d="M5.5 4.5a.5.5 0 00-1 0v1.5a.5.5 0 001 0V4.5zM3.5 4.5a.5.5 0 00-1 0v1.5a.5.5 0 001 0V4.5zM2 9.5a.5.5 0 01.5-.5h15a.5.5 0 010 1h-15a.5.5 0 01-.5-.5z"/><path d="M3 10.25a.25.25 0 01.25-.25h13.5a.25.25 0 01.25.25v5a.25.25 0 01-.25.25H3.25a.25.25 0 01-.25-.25v-5zM4 11.5a.5.5 0 00-1 0v3a.5.5 0 001 0v-3z"/></svg>;
const ExternalLinkIcon = () => <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>;
const CertificateIcon = () => <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>;
const GreenDotIcon = () => <svg className="h-2.5 w-2.5 text-green-500" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3"/></svg>;


const BrandCard = ({ brand }) => {
    if (!brand) return null;

    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
                <div className="flex items-start gap-4 sm:gap-6">
                    <LogoPlaceholder />
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{brand.name}</h2>
                        <p className="mt-1 text-gray-600">{brand.slogan}</p>
                        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
                            <span className="flex items-center gap-1.5"><LocationIcon /> {brand.location}</span>
                            <span className="flex items-center gap-1.5"><ProductIcon /> {brand.productCount} products</span>
                            <span className="flex items-center gap-1.5"><StarIcon /> {brand.rating} ({brand.reviewCount} reviews)</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <div>
                        <h3 className="font-semibold text-gray-900">Brand Story</h3>
                        <p className="mt-2 text-gray-600">{brand.story}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900">Categories</h3>
                        <div className="mt-2 flex flex-wrap gap-2">
                            {(brand.categories ?? []).map(cat => (
                                <span key={cat} className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">{cat}</span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div>
                        <h3 className="flex items-center gap-2 font-semibold text-gray-900"><CertificateIcon /> Certifications</h3>
                        <div className="mt-2 flex flex-wrap gap-2">
                             {(brand.certifications ?? []).map(cert => (
                                <span key={cert} className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">{cert}</span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900">Sustainability Practices</h3>
                        <ul className="mt-2 space-y-1 text-gray-600">
                             {(brand.sustainabilityPractices ?? []).map(practice => (
                                <li key={practice.name} className="flex items-center justify-between">
                                    <span>{practice.name}</span>
                                    {practice.available && <GreenDotIcon />}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="border-t border-gray-200 pt-4 text-center">
                        <h3 className="text-sm font-semibold text-gray-500">Founded</h3>
                        <p className="mt-1 text-2xl font-bold text-gray-900">{brand.founded}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandCard;