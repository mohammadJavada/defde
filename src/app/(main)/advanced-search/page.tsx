import GetStaticDatasAPI from "@/apis/static-datas/get-static-data.api";
import AdvancedSearch from "@/page/advanced-search";

export default async function AdvancedSearchPage() {
  const { colors } = await GetStaticDatasAPI({
    endPoint: "/Color/Get/All",
    method: "get",
  });

  return <AdvancedSearch colors={colors} models={[]} />;
}
