import { useParams } from "react-router";

function ProductDetailsPage() {
  const { id } = useParams();
  return <div>ProductDetailsPage {id}</div>;
}

export default ProductDetailsPage;
