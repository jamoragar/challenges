import { useRouter } from "next/router";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";

export default function Character() {
  const router = useRouter();
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const id = router.query.id;

  const { data, error, isLoading } = useSWR(
    `https://swapi.dev/api/people/${id}`,
    fetcher
  );

  const { name, height, eye_color, birth_year } = data ?? {};

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <Layout>
      <Card
        id={id}
        name={name}
        height={height}
        eyeColor={eye_color}
        birthYear={birth_year}
      />
    </Layout>
  );
}
