type ButtonProps = {
  title: any;
};

const Button = ({ title }: ButtonProps) => {
  return (
    <button className="px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition-colors duration-300 dark:border-white dark:hover:bg-white dark:hover:text-black">
      {title}
    </button>
  );
};
export default Button;
