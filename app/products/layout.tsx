export default function ProductsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section>
			<div>
				{children}
			</div>
		</section>
	);
}
