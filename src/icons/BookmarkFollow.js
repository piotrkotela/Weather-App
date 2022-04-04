import "./styles.css";

const BookmarkFollow = (props) => {
  return (
    <button tabIndex="-1" className="bookmark" onClick={props.onClick.bind(null, props.city)} type="button">
      <svg tabIndex="-1" width="20" height="23" viewBox="0 0 20 23" fill="none">
        <path
          d="M17 0H3C1.346 0 0 1.346 0 3V22C0 22.382 0.218 22.73 0.561 22.898C0.905 23.065 1.313 23.024 1.614 22.789L10 16.267L18.386 22.789C18.565 22.929 18.782 23 19 23C19.149 23 19.3 22.966 19.439 22.898C19.782 22.73 20 22.382 20 22V3C20 1.346 18.654 0 17 0ZM18 19.956L10.614 14.211C10.434 14.07 10.217 14 10 14C9.783 14 9.566 14.07 9.386 14.21L2 19.956V3C2 2.449 2.449 2 3 2H17C17.551 2 18 2.449 18 3V19.956Z"
          fill="#4a4a4a"
        />
      </svg>
    </button>
  );
};

export default BookmarkFollow;
