import React, { useState, useEffect } from 'react';
import ShareTipCard from '../components/ShareTipCard';
import CommunityStats from '../components/CommunityStats';
import PopularCategories from '../components/PopularCategories';
import NewsletterSubscribe from '../components/NewsletterSubscribe';
import TipCard from '../components/TipCard';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { getCommunityPosts } from '../services/api';

const CommunityPage = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchPosts = async () => {
        setLoading(true);
        try {
            const response = await getCommunityPosts();
            setPosts(response.data);
        } catch (e) {
            setError("Could not load community posts. Please try again later.");
            console.error("Failed to fetch community posts:", e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    if (loading) return <LoadingSpinner />;

    return (
        <div className="bg-gray-50/70">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Eco Community</h1>
                    <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-600">Connect with like-minded individuals, share sustainable living tips, and learn from expert articles about environmental practices.</p>
                </div>
                <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3">
                    <main className="lg:col-span-2 space-y-12">
                        <ShareTipCard onPostCreated={fetchPosts} />
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900">Community Tips & Articles</h2>
                            {error && <ErrorMessage message={error} />}
                            <div className="mt-6 space-y-6">
                                {posts.map(post => <TipCard key={post.id} tip={post} />)}
                            </div>
                        </section>
                    </main>
                    <aside className="space-y-8">
                        <CommunityStats />
                        <PopularCategories />
                        <NewsletterSubscribe />
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default CommunityPage;