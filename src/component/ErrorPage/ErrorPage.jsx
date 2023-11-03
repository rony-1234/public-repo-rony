

const ErrorPage = () => {
    return (
        <div className="my-12">
            <h2 className="text-red-700 text-center text-4xl font-bold">404 not found</h2>
            <p className="text-3xl text-center font-semibold">Page not found</p>
             <p className="text-xl text-center mt-6 ">Seems like nothing was found at this location<br/> 
                Try something else you can go back to the homepage following 
                the button below.</p>
        </div>
    );
};

export default ErrorPage;