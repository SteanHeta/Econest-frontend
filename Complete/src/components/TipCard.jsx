import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const TipCard = ({ tip }) => {
    const [likes, setLikes] = useState(tip.likes || 0);
    const [isLiked, setIsLiked] = useState(false);
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const handleLike = () => {
        if (!isAuthenticated) {
            alert("Please log in to like a post.");
            navigate('/login');
            return;
        }
        setIsLiked(!isLiked);
        setLikes(isLiked ? likes - 1 : likes + 1);
    
    };

    return (
        <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="font-bold text-lg text-gray-900">{tip.title}</h3>
            <p className="text-gray-700 mt-2">{tip.excerpt}</p>
            <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-700 font-semibold">
                        {tip.author.charAt(0).toUpperCase()}
                    </div>
                    <div>
                        <p className="font-semibold text-gray-900">{tip.author}</p>
                        <p className="text-xs text-gray-500">{new Date(tip.created_at).toLocaleDateString()}</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 text-gray-500">
                    <button onClick={handleLike} className={`flex items-center gap-1.5 ${isLiked ? 'text-red-500' : 'hover:text-red-500'}`}>
                        <svg className="h-5 w-5" fill={isLiked ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                        {likes}
                    </button>
                    <button onClick={() => alert('Share functionality to be implemented!')} className="hover:text-green-600"><svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8m-4-6l-4-4m0 0L8 8m4-4v12" /></svg></button>
                </div>
            </div>
        </div>
    );
};
export default TipCard;