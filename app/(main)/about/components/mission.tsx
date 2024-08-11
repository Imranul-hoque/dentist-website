"use client";

export const Mission = () => {
    return (
        <div className="w-full h-auto pb-4 md:pb-0 md:h-[80vh] px-16 md:px-8 lg:px-4">            
            <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-y-4">
                <div className="bg-[url('/about-us.jpg')] object-center object-cover h-[60vh] lg:h-full w-full" />
                <div className="bg-whitish h-full w-full flex flex-col space-y-2 items-start justify-center px-6">
                    <p className="text-sm text-blue-400 font-semibold">About us</p>
                    <h2 className="text-3xl md:text-5xl font-semibold text-main">Who We Are</h2>
                    <p className="w-[60%] text-justify text-sm font-semibold text-main">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto similique excepturi alias dicta. Recusandae voluptatem optio consectetur ex laborum ipsa.</p>
                </div>
            </div>
        </div>
    )
}