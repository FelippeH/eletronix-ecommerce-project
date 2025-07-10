"use client";

import { Modal } from "@/components/ui/modal";

const SetupPage = () => {
  return (
    <>
      <div className="p-4">
        <Modal title="Teste" description="Teste00" isOpen onClose={() => {}}>
          Children
        </Modal>
      </div>
    </>
  );
};

export default SetupPage;
