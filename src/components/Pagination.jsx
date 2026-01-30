import React, { useContext, useState, useEffect } from 'react';
import { BlogContext } from '../context/BlogContext';

const Pagination = () => {
  const { totalPages, currentPage, setCurrentPage } = useContext(BlogContext);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const getPageNumbers = () => {
    if (isMobile) {

      if (totalPages <= 3) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
      }
      
      if (currentPage === 1) {
        return [1, 2, '...', totalPages];
      }
      
      if (currentPage === totalPages) {
        return [1, '...', totalPages - 1, totalPages];
      }
      
      return [1, '...', currentPage, '...', totalPages];
    }
    

    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    
    if (currentPage <= 3) {
      return [1, 2, 3, 4, '...', totalPages];
    }
    
    if (currentPage >= totalPages - 2) {
      return [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }
    
    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-8 mb-6">
      

      <div className="text-sm text-gray-600">
        Page <span className="font-semibold text-blue-600">{currentPage}</span> of {totalPages}
      </div>
      

      <div className="flex items-center gap-2">

        <button 
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg font-medium text-sm md:text-base min-w-22.5 transition-all ${
            currentPage === 1 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
              : 'bg-blue-500 text-white hover:bg-blue-600 active:scale-95'
          }`}
        >
          {isMobile ? '← Prev' : 'Previous'}
        </button>
        

        <div className="hidden xs:flex items-center gap-1">
          {getPageNumbers().map((page, index) => (
            page === '...' ? (
              <span key={`ellipsis-${index}`} className="px-2 py-1 text-gray-500">
                ...
              </span>
            ) : (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 flex items-center justify-center rounded-lg font-medium transition-all ${
                  currentPage === page 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {page}
              </button>
            )
          ))}
        </div>
        

        <button 
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg font-medium text-sm md:text-base min-w-22.5 transition-all ${
            currentPage === totalPages 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
              : 'bg-blue-500 text-white hover:bg-blue-600 active:scale-95'
          }`}
        >
          {isMobile ? 'Next →' : 'Next'}
        </button>
      </div>
      

      {isMobile && totalPages > 5 && (
        <div className="flex items-center gap-2 mt-2">
          <span className="text-sm text-gray-600">Go to:</span>
          <input 
            type="number"
            min="1"
            max={totalPages}
            value={currentPage}
            onChange={(e) => {
              const page = Math.min(Math.max(1, parseInt(e.target.value) || 1), totalPages);
              setCurrentPage(page);
            }}
            className="w-16 px-3 py-1 border border-gray-300 rounded text-center"
          />
        </div>
      )}
    </div>
  );
};

export default Pagination;