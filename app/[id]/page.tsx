import { getPostById } from "@/fsd/Entities/Posts/api/api";
import PostPage from "@/fsd/Pages/PostPage/PostPage"
import { dehydrate } from "@tanstack/query-core";
import { HydrationBoundary, QueryClient } from "@tanstack/react-query";



const Page = async ({ params }: { params: { id: number } }) => {
  
    return <section>
        <PostPage id={params.id} />
    </section>
}
export default Page