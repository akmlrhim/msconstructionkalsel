import React from "react";

export default function LoadingSkeleton() {
  return (
    <div className="w-full min-h-screen bg-[#FAF8F5] animate-pulse pt-28 pb-16 px-4 md:px-8">
      {/* Hero Skeleton Area */}
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="h-8 w-48 bg-gray-200/80 rounded-full mx-auto mb-8"></div>
          <div className="h-14 md:h-20 w-full bg-gray-200/80 rounded-2xl"></div>
          <div className="h-14 md:h-20 w-4/5 bg-gray-200/80 rounded-2xl mx-auto"></div>
          <div className="h-5 w-2/3 bg-gray-200/80 rounded-md mx-auto mt-8"></div>
          <div className="h-5 w-1/2 bg-gray-200/80 rounded-md mx-auto"></div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <div className="h-14 w-full sm:w-40 bg-gray-200/80 rounded-xl"></div>
            <div className="h-14 w-full sm:w-40 bg-gray-200/80 rounded-xl"></div>
          </div>
        </div>

        {/* Services Bento Skeleton Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-32">
          <div className="h-72 bg-gray-200/80 rounded-2xl"></div>
          <div className="h-72 bg-gray-200/80 rounded-2xl hidden md:block"></div>
          <div className="h-72 bg-gray-200/80 rounded-2xl hidden lg:block"></div>
        </div>
      </div>
    </div>
  );
}
