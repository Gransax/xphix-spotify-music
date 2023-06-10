"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { IoMdClose } from "react-icons/io";

type Props = {
  isOpen: boolean;
  onChange: (open: boolean) => void;
  title: string;
  description: string;
  children: React.ReactNode;
};

const Modal = ({ isOpen, onChange, title, description, children }: Props) => {
  return (
    <Dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
      <Dialog.Portal>
        <Dialog.Overlay
          className="
            fixed
            inset-0
            bg-neutral-900/90
            backdrop-blur-sm  
          "
        />
        <Dialog.Content
          className="
            fixed
            left-[50%]
            top-[50%]
            h-full
            max-h-full
            w-full
            translate-x-[-50%]
            translate-y-[-50%]
            rounded-md
            border
            border-neutral-700
            bg-neutral-800
            p-[25px]
            drop-shadow-md
            focus:outline-none
            md:h-auto
            md:max-h-[85vh]
            md:w-[90vw]
            md:max-w-[450px]
            "
        >
          <Dialog.Title
            className="
              mb-4
              text-center
              text-xl
              font-bold
            "
          >
            {title}
          </Dialog.Title>
          <Dialog.Description
            className="
              text-xm
              mb-5
              text-center
              leading-normal
            "
          >
            {description}
          </Dialog.Description>
          <div>{children}</div>
          <Dialog.Close asChild>
            <button
              className="
              appearance:none
              absolute
              right-[10px]
              top-[10px]
              inline-flex
              h-[25px]
              w-[25px]
              items-center
              justify-center
              rounded-full
              text-neutral-400
              hover:text-white
              focus:outline-none
              "
            >
              <IoMdClose />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
