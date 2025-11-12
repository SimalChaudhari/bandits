import React from 'react'
import { FaUsers } from 'react-icons/fa'
import growIcon from '../../assets/images/admin/dashboard/grow.png'

function Card({ 
  title, 
  value, 
  trend, 
  trendColor = 'text-customeGreen',
  icon, 
  iconBgColor = 'bg-customeYellow rounded-[23px]',
  iconColor = 'text-white'
}) {
  return (
    <div className="bg-customeLightBlack rounded-[14px] p-3 md:p-6 border border-customeYellow">
      <div className="flex items-center justify-between mb-3">
        <span className="text-customeWhite md:text-16 text-11 font-satoshi">{title}</span>
        <div className={` ${iconBgColor} flex items-center justify-center shadow-md`}>
          {typeof icon === 'string' ? (
            <span className={`${iconColor} text-lg font-bold`}>{icon}</span>
          ) : icon ? (
            <div className={iconColor}>
              {icon}
            </div>
          ) : (
            <FaUsers className={`${iconColor} text-lg`} />
          )}
        </div>
      </div>
      <p className="text-white md:text-28 text-18 font-bold font-satoshi mb-2">{value}</p>
      <p className="text-xs font-satoshi flex items-center gap-1">
        {trend && (() => {
          const hasUpArrow = trend.includes('Up') || trend.includes('↑');
          
          // If trend has "Up", show icon + green number + white text
          if (hasUpArrow) {
            const numberMatch = trend.match(/([\d.]+%|\$[\d,]+)/);
            const numberPart = numberMatch ? numberMatch[0] : '';
            const textPart = trend.replace(numberMatch ? numberMatch[0] : '', '').trim();
            
            return (
              <>
                <img src={growIcon} alt="Up" className="" />
                {numberPart && <span className="text-customeGreen md:text-16 text-10">{numberPart}</span>}
                {textPart && <span className="text-customeWhite md:text-16 text-10"> {textPart}</span>}
              </>
            );
          }
          
          // If trend doesn't have "Up", show entire text in white (no icon, no green)
          return <span className="text-customeWhite">{trend}</span>;
        })()}
      </p>
    </div>
  )
}

export default Card

