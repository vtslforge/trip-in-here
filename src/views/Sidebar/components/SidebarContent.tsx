import CaseInfo from "./CaseInfo";
import Controls from "./Controls";
import EvidenceFound from "./EvidenceFound";
import Objectives from "./Objectives";

const SidebarContent = () => {
  return (
    <aside className="h-[76vh] w-[24vw] min-w-[285px] overflow-auto border-l border-case-accent/15 bg-case-panel p-2 max-md:min-w-[250px] max-[700px]:h-auto max-[700px]:w-full max-[700px]:min-w-0 max-[700px]:border-t max-[700px]:border-l-0 max-[700px]:p-3">
      <CaseInfo />
      <EvidenceFound />
      <Objectives />
      <Controls />
    </aside>
  );
};

export default SidebarContent;
