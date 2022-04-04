import "./styles.css";

const BookmarkUnfollow = (props) => {
  return (
    <button
      tabIndex="-1"
      className="bookmark"
      onClick={props.onClick.bind(null, props.city)}
      type="button"
    >
      <svg
        width="20"
        height="23"
        viewBox="0 0 20 23"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3 0H17C18.654 0 20 1.346 20 3V22C20 22.382 19.782 22.73 19.439 22.898C19.3 22.966 19.149 23 19 23C18.782 23 18.565 22.929 18.386 22.789L10 16.267L1.614 22.789C1.313 23.024 0.905 23.065 0.561 22.898C0.218 22.73 0 22.382 0 22V3C0 1.346 1.346 0 3 0Z"
          fill="#4a4a4a"
        />
      </svg>
    </button>
  );
};

export default BookmarkUnfollow;
