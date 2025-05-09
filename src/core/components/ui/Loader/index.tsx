import './loader.css';

const Loader = () => {
    return (
        <svg className="loader" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_2327_19958)">
            <circle cx="16" cy="16" r="16" fill="#4640DE" />
            <g clipPath="url(#clip1_2327_19958)">
              <path
                d="M21.9497 20.2871C22.2713 19.8522 22.8794 19.759 23.3165 20.0776L26.1341 21.7173L26.1776 21.7106C26.7634 22.1456 26.8908 22.9769 26.4622 23.5674C26.0335 24.1578 25.211 24.2839 24.6252 23.8489L22.179 21.7831L22.0863 21.7061C21.9107 21.5424 21.7939 21.3228 21.7571 21.0822C21.714 20.8015 21.7834 20.5154 21.9497 20.2871ZM12.6824 5.98222C14.9152 5.64003 17.1939 6.20837 19.0173 7.56221C20.8407 8.91605 22.0594 10.9445 22.4053 13.2013C23.1255 17.9009 19.9402 22.2883 15.2906 23.0009C10.6411 23.7134 6.28803 20.4813 5.56779 15.7818C4.84755 11.0822 8.03287 6.6948 12.6824 5.98222Z"
                fill="white"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_2327_19958">
              <rect width="32" height="32" fill="white" />
            </clipPath>
            <clipPath id="clip1_2327_19958">
              <rect width="23.8304" height="23.8304" fill="white" transform="translate(2 5.61035) rotate(-8.71322)" />
            </clipPath>
          </defs>
        </svg>
    );
}

export default Loader;