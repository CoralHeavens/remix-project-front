const LoadingSpinner:React.FC = () => {
    return (
        <section className="fixed top-0 left-0 w-screen h-screen bg-slate-800 opacity-60 flex justify-center items-center">
            <div id="spinner"></div>
        </section>
    )
}

export default LoadingSpinner;