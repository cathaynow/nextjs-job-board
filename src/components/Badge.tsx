interface BadgePros {
    children: React.ReactNode;
}

const Badge = ({children}:BadgePros) => {
    return (
        <span className="border rounded px-2 py-0.5 bg-muted text-muted-foreground text-sm font-medium">{children}</span>
    )
}
export default Badge
