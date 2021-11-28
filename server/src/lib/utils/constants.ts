export const __prod__ = process.env.NODE_ENV === 'production';
export const __dev_db__ = 'friendliedb';
export const __secret__ = process.env.JWT_SECRET || 'asdkjhasdkjhaskdjhaskdhaskjdhkasjhd';
export const __jwt_exp__ = '2h';
