const Footer = () => (
    <footer
        className="mt-24 reveal"
        style={{ animationDelay: "1000ms" }}
    >
        <div className="gold-line mb-8" />
        <div className="flex items-center justify-between">
            <p className="text-dim text-[10px] uppercase tracking-[0.4em] font-body">
                JOTA © {new Date().getFullYear()}
            </p>
            <p className="text-dim text-[10px] uppercase tracking-[0.3em] font-body">
                Confidencial
            </p>
        </div>
    </footer>
);

export default Footer;
