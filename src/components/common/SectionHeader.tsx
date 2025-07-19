import React from 'react';

interface SectionHeaderProps {
  title: string;
  accentColor?: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  accentColor = "bg-blue-600",
  className = ""
}) => {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <div className="flex items-center gap-2">
        <div className={`w-1 h-8 ${accentColor} rounded-full`}></div>
        <h2 className="text-xl md:text-3xl lg:4xl font-bold text-black">{title}</h2>
      </div>
    </div>
  );
};

export default SectionHeader;