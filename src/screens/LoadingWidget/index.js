import React from "react";
import { Widget } from "../../components/Widget";

export default function LoadingWidget() {
  return (
    <>
      <Widget.Header>Carregando...</Widget.Header>

      <Widget.Content>[Desafio do Loading]</Widget.Content>
    </>
  );
}
