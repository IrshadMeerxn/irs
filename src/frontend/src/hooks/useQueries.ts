import { useQuery } from "@tanstack/react-query";
import { useActor } from "./useActor";

// This file is prepared for future backend integration
// Currently, the portfolio uses static content

export function useGetSkillImage(skillId: bigint) {
  const { actor, isFetching } = useActor();

  return useQuery({
    queryKey: ["skillImage", skillId.toString()],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getSkillImage(skillId);
    },
    enabled: !!actor && !isFetching,
  });
}
