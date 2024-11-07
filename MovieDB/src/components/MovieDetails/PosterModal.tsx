import React from 'react';

type ModalProps = {
    isOpen: boolean;
    imageUrl: string;
    onClose: () => void;
};

const PosterModal: React.FC<ModalProps> = ({ isOpen, imageUrl, onClose }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 w-full h-screen "
            onClick={onClose}
        >
            <div
                className="relative max-w-[95%] max-h-[95%] w-full h-full overflow-hidden "
                onClick={(e) => e.stopPropagation()} // modal bezárásának megakadályozása
            >
                <img
                    src={imageUrl}
                    alt="Movie Poster"
                    className="w-full h-full object-contain "
                />
                <button
                    onClick={onClose}
                    className="absolute top-1 right-1 text-white bg-red-500 hover:bg-red-800 rounded-full w-10 md:w-12 h-10 md:h-12 flex items-center justify-center p-2 transition duration-300 ease-in-out"
                >
                    <span className="font-bold text-lg">X</span>
                </button>
            </div>
        </div>
    );
};

export default PosterModal;
