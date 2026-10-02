export default function Button({ children, onClick, type = "button", className = "" }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`
            rounded-xl
            bg-white/40
            text-blue
            font-medium
            shadow-4xl
            transition
            duration-300
            ease-in-out
            hover:bg-white/70 hover:scale-105
            focus:bg-pink-700
             ${className}
            p-2
            m-1`}
        >
            {children}
        </button>
    );
}

