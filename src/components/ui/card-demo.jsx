import { Link } from "react-router-dom";
import { forwardRef } from "react";

const CardDemo = forwardRef(({ title, description, image, hoverImage, link }, ref) => {
  return (
    <div ref={ref} className="opacity-0">
      <Link to={link} className="block max-w-sm w-full">
        <div
          style={{
            backgroundImage: `url(${image})`,
          }}
          className={`
            group relative w-full h-[280px] rounded-xl overflow-hidden
            bg-cover bg-center transition-all duration-500
            before:absolute before:inset-0 before:z-10 before:bg-gradient-to-b before:from-black/10 before:to-black/60 before:transition-opacity
            hover:before:opacity-90
            shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300
            cursor-pointer
          `}
        >
          <div 
            style={{
              backgroundImage: `url(${hoverImage})`,
            }}
            className="absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
          
          <div className="relative z-20 h-full flex flex-col justify-end p-6">
            <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
              {title}
            </h3>
            <p className="text-white/90 text-base leading-relaxed line-clamp-2">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
});

CardDemo.displayName = 'CardDemo';

export default CardDemo; 