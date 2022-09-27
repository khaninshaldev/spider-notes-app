import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
} from "@chakra-ui/react";
import moment from "moment";

const NoteDetails = ({
  content,
  createdAt,
  onOpen,
  onClose,
  isOpen,
}: {
  content: string;
  createdAt: Date;
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
}) => {
  const time = moment(createdAt).format("hh:mm A");
  const date = moment(createdAt).format("dddd, DD-MMM-YYYY");
  return (
    <>
      <Drawer onClose={onClose} isOpen={isOpen} size="lg">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            Added at {time} on {date}.
          </DrawerHeader>
          <DrawerBody>
            <Text>{content}</Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default NoteDetails;
