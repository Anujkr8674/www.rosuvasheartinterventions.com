import React from 'react';
import Image from 'next/image';

function AuthorCard({
  title,
  qualification = '',
  experience = '',
  designation = '',
  department = '',
  additional_roles = '',
  institution = '',
  hospital = '',
  location = '',
  image = null,
}) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-5 p-4 rounded-md backdrop-blur-md bg-[#195BA2] border-4 shadow-[0_8px_32px_rgba(0,126,130,0.2)] hover:shadow-[0_10px_40px_rgba(0,126,130,0.3)] transition duration-300 sm:w-[500px] w-full">
      
      {image && (
        <div className="relative w-40 h-40 md:w-32 md:h-32 flex-shrink-0 rounded-lg overflow-hidden border-2 border-white shadow-lg">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      <div className='text-center md:text-left'>
        <h2 className="text-white font-bold text-lg">{title}</h2>
        <p className="text-gray-100 text-sm mt-1">{qualification}</p>
        <p className="text-gray-100 text-sm mt-1">{experience}</p>
        <p className="text-gray-100 text-sm mt-1">{designation}</p>
        <p className="text-gray-100 text-sm mt-1">{additional_roles}</p>
        <p className="text-gray-100 text-sm mt-1">{department}</p>
         <p className="text-gray-100 text-sm mt-1">{institution}</p>
        <p className="text-gray-100 text-sm mt-1">{hospital}</p>
        <p className="text-gray-100 text-sm mt-1">{location}</p>
      </div>
    </div>
  );
}

export default AuthorCard;
